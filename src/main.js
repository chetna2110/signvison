import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import { drawRect } from './labelmap';
import Navbar from './components/Navbar';
import Images from './components/Images';
import Loading from './components/Loading';
import './App.css';

function Main() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const videoWidthRef = useRef(640);
    const videoHeightRef = useRef(480);

    const detect = async (net) => {
        if (webcamRef.current && webcamRef.current.video.readyState === 4) {
            setLoading(false);
            setTimeout(() => setIsLoading(false), 12000);

            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            videoWidthRef.current = videoWidth;
            videoHeightRef.current = videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            if (!canvasRef.current) {
                console.warn("Canvas element is not found!");
                return;
            }

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const img = tf.browser.fromPixels(video);
            const resized = tf.image.resizeBilinear(img, [640, 480]);
            const casted = resized.cast('int32');
            const expanded = casted.expandDims(0);
            const obj = await net.executeAsync(expanded);

            const boxes = await obj[0].array();
            const classes = await obj[6].array();
            const scores = await obj[4].array();

            const ctx = canvasRef.current.getContext('2d');

            requestAnimationFrame(() => {
                drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx);
            });

            tf.dispose(img);
            tf.dispose(resized);
            tf.dispose(casted);
            tf.dispose(expanded);
            tf.dispose(obj);
        }
    };

    useEffect(() => {
        const runMobnet = async () => {
            const net = await tf.loadGraphModel(
                'https://tfjshandsignmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json'
            );

            setInterval(() => {
                detect(net);
            }, 16.7);
        };
        runMobnet();
    }, []);

    return (
        <>
            <div className="App">
                <Navbar />
                <div className="main-container scrollbar flex flex-wrap items-center justify-center h-full">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:order-last">
                        <div className="relative w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
                            <Webcam
                                ref={webcamRef}
                                className="web rounded-lg border-2 border-gray-500 shadow-md"
                            />
                            <canvas
                                ref={canvasRef}
                                className="web absolute top-0 left-0 rounded-lg border-2 border-gray-500 shadow-md"
                            />
                            {isLoading && (
                                <Loading
                                    loading={loading}
                                    videoHeight={videoHeightRef}
                                    videoWidth={videoWidthRef}
                                />
                            )}
                        </div>
                        <Images />
                    </div>
                    <div className="w-full md:w-1/2 h-full overflow-auto scrollbar md:order-first px-6 py-4">
                        {/*Additional Content Can Go Here */}
                        <div className="w-full text-center p-8 bg-gray-900 text-white rounded-xl mt-6 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl">
                            <h2 className="text-3xl font-extrabold tracking-wide">Explore More Features</h2>
                            <p className="mt-3 text-gray-400 leading-relaxed">
                                This section can showcase extra features, user guides, or real-time feedback about
                                the detected signs, enhancing accessibility and user experience.
                            </p>

                            {/* Call to Action */}
                            <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition duration-300 shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
