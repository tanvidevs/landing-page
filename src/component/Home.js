
  import React, { useState } from 'react';
import confuse from '../assests/confuse.png' ;// Check the import path for your image
import { firestore } from "../firebase";
import { Helmet} from 'react-helmet-async';


const Home = () => {
 <Helmet>
   <title>Fukat</title>
   <meta
      name="description"
      content="Web site created using create-react-app"
      data-rh="true"
    />
   <link rel="canonical" href="/home" />
 </Helmet>
  
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const isValidEmail = (email) => {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isValidEmail(email)) {
        await firestore.collection('waitlist').add({
          email,
        });

        setEmail(''); // Clear the email input field
        setErrorMessage('');
        toggleModal();
      } else {
        setErrorMessage('Please enter a valid email address.');
      }
    } catch (error) {
      console.error('Error submitting data: ', error);
    }
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const [email, setEmail] = useState("");

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };

  // const isValidEmail = (email) => {
  //   // Regular expression for validating an Email
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     if (isValidEmail(email)) {
  //       await firestore.collection("waitlist").add({
  //         email,
  //       });
  
  //       setEmail(""); // Clear the email input field
  //       toggleModal();
  //     } else {
  //       console.error("Invalid email address");
  //       // Handle the invalid email address (show error message, etc.)
  //     }
  //   } catch (error) {
  //     console.error("Error submitting data: ", error);
  //   }
  // };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior

  //   try {
  //     if (email.trim() !== "") {
  //       await firestore.collection("waitlist").add({
  //         email,
  //       });

  //       setEmail(""); // Clear the email input field
  //       toggleModal();
  //     }
  //   } catch (error) {
  //     console.error("Error submitting data: ", error);
  //   }
  // };

  return (
    
    <div>
      <section className="text-gray-600 body-font md:mt-0 -mt-28">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">Find the <span className='from-orange-600 via-pink-600 to-indigo-900 bg-gradient-to-r bg-clip-text text-transparent'><b>Perfect Professional</b></span> for you</h1>
            <p className="mb-8 leading-relaxed">Discover your ideal digital marketing guru, website wizard, or graphic design genius today! Our platform connects freelancers with the skills you need to make your project shine.</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
          type="text"
          id="hero-field"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-pink-200 focus:bg-transparent focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="tanvi@example.com"
        />
        {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
              </div>
              <button
                onClick={(event) => {
                  event.preventDefault(); // Prevent the default form submission behavior if necessary
                  handleSubmit(event); // Pass the event to handleSubmit
                  toggleModal();
                }}
                className="modal-button inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-900 hover:bg-gradient-to-br focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-800"
              >
                Notify Me
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Join the waitlist to get exciting discounts!</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-10 md:-mt-30">
            <img src={confuse} alt='' />
          </div>
        </div>
      </section>
      {isOpen && (
        <div className="modal opacity-1 pointer-events-auto fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer rounded-lg" onClick={toggleModal}></div>
          <div className="absolute w-3/4 h-32 md:w-1/2 md:h-32 bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
            <span className='text-center from-orange-600 via-pink-600 to-indigo-900 bg-gradient-to-r bg-clip-text text-transparent'>Thanks for Joining our Waitlist!</span>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
