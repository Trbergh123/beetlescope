const router = require("express").Router();
const { Project } = require("../models/");
const {authUser} = require("../utils/auth");

router.get("/projects", authUser, (req, res) => {
    Project.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const projects = dbPostData.map((project) => project.get({ plain: true }));
        
        res.render("/edit-project", {
          layout: "dashboard",
          projects
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login"); //if not logged in, if authUser isn't true, then boom redirect to login.
      });
  });

  router.get("/newproject", authUser, (req, res) => {
    res.render("newproject", {
      layout: "main"
    });
  });
  
  router.get("/edit/:id", authUser, (req, res) => {
    Project.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const project = dbPostData.get({ plain: true });
          
          res.render("edit-project", {
            layout: "main",
            project
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;
