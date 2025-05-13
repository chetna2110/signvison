import React from 'react'
import Card2 from '../card/Card2';

const grid2 = () => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <Card2 class="h-32 rounded bg-gray-300" />
        <Card2 class="h-32 rounded bg-gray-300" />
        <Card2 class="h-32 rounded bg-gray-300" />
        <Card2 class="h-32 rounded bg-gray-300" />
      </div>
    </div>
  );
}

export default grid2
