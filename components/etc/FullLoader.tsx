import Loader from "./Loader";

// Loading Spinner
export default function FullLoader({ show }) {
  return show ? (
    // <div className="fixed top-0 left-0 w-full h-full">
    <div className="fixed flex items-center justify-center z-[1000] top-0 left-0 flex-col fade-effect-fast w-screen h-screen ">
      <Loader />
    </div>
  ) : 
  null;
}
