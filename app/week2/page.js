// /app/week2/page.js

import StudentInfo from '../StudentInfo'; // Go up one level to find StudentInfo.js

const Week2Page = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40vh',
      textAlign: 'center', 
      fontFamily: '"Lucida Console", Courier New, monospace',  fontWeight: 'bold',
    }}>
      <h1 style={{scale:'2'}}>My Shopping List</h1>
      <StudentInfo />
    </div>
  );
};

export default Week2Page;
