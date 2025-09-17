import Prompt from "./Prompt";
import Model from "./Model";
function Demo() {
  return (
    <section>
      <Prompt />

      <div className="flex flex-col gap-6">
        <Model modelNumber="A" />
        <Model modelNumber="B" />
      </div>
    </section>
  );
}

export default Demo;
