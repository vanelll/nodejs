const HOME ="/";
const SEARCH= "/search";
const CREATE="/create";


const DETAIL= "/:id";
const EDIT= "/:id/edit";
const DELETE = "/:id/delete";

const routes= {
    home:HOME,
    create: CREATE,
    search: SEARCH,
    detail: id=>{
        if(id){
            return `/${id}`;
        }else{
            return DETAIL;
        }
    },
    edit:EDIT,
    delete:DELETE
};

export default routes;