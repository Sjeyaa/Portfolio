function Contact() {

    const config = {
        email: "jeyaaravinths@gmail.com",
        phone: "+91 9629424090"
    }

    return(
        <section className="flex flex-col bg-secondary px-5 py-32" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-red-600 border-primary border-b-4 mb-5 w-[120px] font-bold font-hero-font">Contact</h1>
                <p className="text-white pb-5">If you want to discuss more in detail . Please contact me</p>
                <p className="text-white py-2"><span className="font-bold">Email : </span> {config.email}</p>
                <p className="text-white py-2"><span className="font-bold">Phone : </span> {config.phone}</p>
            </div>
        </section>
    );
}

export default Contact;