const Contact = () => {
  return (
    <div>
      <h1 className="p-2 m-2 text-bold text-xl">Contatct Us</h1>
      <form>
        <input
          className="p-2 m-2 border border-black-50 rounded-lg"
          placeholder="Name"
        ></input>
        <input
          className="p-2 m-2 border border-black-50 rounded-lg"
          placeholder="Message"
        ></input>
        <button className="p-2 m-2 border bg-green-600 text-white rounded-lg cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
