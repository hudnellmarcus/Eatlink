interface OptionsProps {
  diet: string;
  setDiet: React.Dispatch<React.SetStateAction<string>>;
  keywords?: string;
  setKeywords?: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleReset: () => void;
}

const Options = (props: OptionsProps) => {
  return (
    <div className="md:flex md:items-center md:m-6 md:py-4 md:justify-center">
      <form onSubmit={props.handleSubmit}>
        <div className="w-full flex space-x-12 py-6 px-4">
          <select
            id="dietSelector"
            className="rounded-full h-10 w-120 px-12 text-blue-500 justify-center"
            style={{ border: "1px solid #ccc" }}
            value={props.diet}
            onChange={(e) => props.setDiet(e.target.value)}
          >
            <option value="">select a diet</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        {/* <button className="bg-blue-500 rounded-full py-2 px-10 text-white">
            see what's nearby
          </button>{" "}*/}
          {/*findLocalFood*/}
          <button
            type="submit"
            className="bg-blue-500 rounded-full py-2 px-2 md:px-10 text-white"
            onClick={props.handleReset}
          >
            ask AI for recipes
          </button>{" "}
        </div>
        {/*askAI*/}
      </form>
    </div>
  );
};

export default Options;
