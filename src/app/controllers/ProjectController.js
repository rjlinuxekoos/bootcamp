
const projects = [];

class ProjectController {
  store(req, res) {
    const { id, title } = req.body;
    const project = {
      id,
      title,
      tasks: [],
    };

    projects.push(project);
    return res.json(projects);
  }

  update(req, res){
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id === id);

    project.title = title;

    return res.json(project);
  });


  listall(req, res) {
    return res.json(projects);
  }
  retorna_lista_check(){
    return projects;
  }
  delete(req, res) {
    const { id } = req.params;
    const projectIndex = projects.findIndex(p => p.id === id);
    projects.splice(projectIndex, 1);
    return res.send();
  }

  storetasks(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id === id);
    project.tasks.push(title);
    return res.json(project);
  }
}

export default new ProjectController();
