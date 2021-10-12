import { useEffect, useState } from 'react';

export function Async() {
  const [isButtonVisible, seIsButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      seIsButtonVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {isButtonVisible && <button>Button</button>}
    </div>
  );
}
