function Prompt() {
  return (
    <form className="mx-6 mb-8 flex rounded-full px-6 py-4 shadow-sm shadow-blue-200/80 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-100">
      <input
        type="text"
        id="prompt"
        name="prompt"
        placeholder="Enter a prompt..."
        className="text-md grow placeholder:text-neutral-400 focus:outline-none"
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-color-neutral-700 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </form>
  );
}

export default Prompt;
