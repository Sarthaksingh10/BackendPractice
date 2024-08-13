const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUser,
  handlePatch,
  handleNewUsers,
} = require("../controllers/user");
/* router.get("/users", async (req, res) => {
  //Creating a user so that we can fetch data out of it
  const allDbUsers = await User.find({});
  const html = `<ul>
${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
</ul>`;
  res.send(html);
}); */
router.route("/").get(handleGetAllUsers).post(handleNewUsers);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handlePatch)
  .delete(handleDeleteUser);
//This is how to perform patch and delete request with no mongoose
/*  .patch((req, res) => {
    return res.json({ status: "Id Updated " });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const Deleteuser = users.find((user) => user.id === id);
    users.splice(users.indexOf(Deleteuser), 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) throw new err();
      return res.json({ status: `Deleted id : ${id}` });
    });
    console.log(id);
  }); */

router.post("/", handleNewUsers);

module.exports = router;
