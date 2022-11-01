//External Lib Import
const CategoryRoutes = require("express").Router();
const CategoryControllers = require("../controller/Category/CategoryControllers");
const { CheckUserAuth } = require("../middleware/CheckAuthLogin");

//Category Create
CategoryRoutes.post(
  "/CategoryCreate",
  CheckUserAuth,
  CategoryControllers.CategoryCreate,
);

//Category Drop Down
CategoryRoutes.get(
  "/CategoryDropDown",
  CheckUserAuth,
  CategoryControllers.CategoryDropDown,
);

//Category List
CategoryRoutes.get(
  "/CategoryList/:pageNumber/:perPage/:searchKeyword",
  CheckUserAuth,
  CategoryControllers.CategoryList,
);

//Category Details
CategoryRoutes.get(
  "/CategoryDetails/:id",
  CheckUserAuth,
  CategoryControllers.CategoryDetails,
);

//Category Update
CategoryRoutes.patch(
  "/CategoryUpdate/:id",
  CheckUserAuth,
  CategoryControllers.CategoryUpdate,
);

//Category Delete
CategoryRoutes.delete(
  "/CategoryDelete/:id",
  CheckUserAuth,
  CategoryControllers.CategoryDelete,
);

module.exports = CategoryRoutes;
