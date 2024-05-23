import React, { useEffect, useRef } from "react";

function Test() {
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${dateRef.current.value}`);
  };

  useEffect(() => {
    // console.log(inputRef);
    dateRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={dateRef} type="date" />
      <input ref={itemRef} type="text" />
      <input ref={contentRef} type="text" />
      <button onClick={handleSubmit}>클릭!</button>
    </div>
  );
}

export default Test;
