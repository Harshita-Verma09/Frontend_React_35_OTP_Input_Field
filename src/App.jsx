import OTPInput from './components/OTPInput';
import './App.css'

function App() {
  const handleComplete = (otpValue) => {
    alert(`Entered OTP: ${otpValue}`);
  };


  return (
    <>


      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>Enter OTP</h2>
        <OTPInput length={6} onComplete={handleComplete} />
      </div>

    </>
  )
}

export default App
