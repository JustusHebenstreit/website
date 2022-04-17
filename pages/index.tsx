import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

const Index = () => {
  return (
    <>
      <div className='bg-slate-100 flex justify-center items-center text-8xl flex-col p-10 lg:text-9xl h-screen'>
        <div className='flex flex-col w-screen item-start'>
          <h1>HELLO.</h1>
        </div>
        <div className='flex flex-col w-screen items-end'>
          <h1>I AM</h1>
          <h1>JUSTUS</h1>
        </div>
        <div className='flex space-x-4 mt-10'>
          <a href='https://github.com/JustusHebenstreit'>
            <GitHubLogoIcon className='w-[70px] h-[70px]' />
          </a>
          <a href='https://twitter.com/ThisIsJustUs'>
            <TwitterLogoIcon className='w-[70px] h-[70px]' />
          </a>
          <a href='https://www.linkedin.com/in/justushebenstreit'>
            <LinkedInLogoIcon className='w-[70px] h-[70px]' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Index;
