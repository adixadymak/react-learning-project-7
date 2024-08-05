import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectedSelected.jsx";
import ProjectsSidebar from "./ProjectsSidebar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
