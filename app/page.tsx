import PatientForm from "@/components/forms/PatientForm";
import Image from 'next/image'; // Ensure you import Image if you're using the next/image component
import Link from 'next/link'; // Import Link if you're using next/link for navigation

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">

      {/* Main container with scrolling disabled and centered content */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] mx-auto"> {/* mx-auto centers the container */}
          {/* Placeholder Image */}
          <Image
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
            src="/path/to/image.jpg" // Add the actual image path here
          />
          
          {/* Patient Form Component */}
          <PatientForm />

          {/* Footer Section */}
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              2024 VitaLink
            </p>
            {/* Link to Admin Page */}
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      
      {/* Side Image */}
      <Image
        src="/path/to/side-image.jpg" 
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]" // Add the actual image path here
      />
    </div>
  );
}
