import Homepage from '../components/Homepage.jsx';


export default function Home() {
  return (
    <>
      <div>
        <div className='h-full flex flex-col'>
          <div className='flex-grow'>
            <Homepage />
          </div>
        </div>
      </div> 
    </>
  );
}
