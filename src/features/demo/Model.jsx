import ScoreCircle from "./ScoreCircle";

function Model({ modelNumber = "A" }) {
  return (
    <div className="mx-6 rounded-xl px-6 py-6 shadow-md shadow-neutral-200">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-700">
          Model {modelNumber}: GPT-4
        </h2>
        <select
          name="model"
          id="model"
          className="uper w-28 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-2 text-sm font-medium text-neutral-600 uppercase"
        >
          <option value="llama-3.3">Llama-3.3</option>
          <option value="deepseek-r1">Deepseek</option>
          <option value="qwen3-32b">Qwen3</option>
          <option value="gemma2-9b-it">Gemma2</option>
          <option value="kimi-k2">Kimi-k2</option>
        </select>
      </div>

      <p className="mb-6 rounded-md bg-neutral-100 px-4 py-2 text-sm text-neutral-400">
        This is where the AI generated response will be placed. It will be
        dyanmically updated based on the prompt entered above.
      </p>

      <div className="mb-4">
        <h3 className="text-md mb-4 font-semibold text-neutral-700">
          Ethical Risk Score
        </h3>

        <div className="flex h-auto justify-between px-2">
          <ScoreCircle value={15} label="Bias" />
          <ScoreCircle value={30} label="Toxicity" />
          <ScoreCircle value={65} label="Hallucination" />
        </div>
      </div>

      <button className="inline-block w-full rounded-md border border-neutral-100 bg-neutral-50 px-6 py-2.5 text-sm text-neutral-400">
        <p className="text-md font-semibold text-neutral-700">
          View Judge's Rationale
        </p>
      </button>
    </div>
  );
}

export default Model;
