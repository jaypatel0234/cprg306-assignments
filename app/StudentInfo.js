// StudentInfo.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', fontFamily: '"Lucida Console", Courier New, monospace'
      }}>
         
      <h3>Name: Jay Umeshchandra Patel</h3>
      <h4>Course Section: CPRG 306 C</h4>
      <p>
         
        <Link href="https://github.com/jaypatel0234/cprg306-assignments">Visit My GitHub : https://github.com</Link>
      </p>
    </div>
  );
};

export default StudentInfo;
