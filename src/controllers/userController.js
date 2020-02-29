export const getJoin = (req,res) => {
    res.render("join", {pageTitle : "Join"});
};

export const postJoin= (req,res) => {
    const {
        body: {name,email,password, password2}
    } =req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }else {
        res.redirect(routes.home);
    }
};

export const getLogin = (req,res)=> res.send("login", {pageTitle: "login"});
export const postLogin= (req,res) => {
    res.redirect(routes.home);
};

export const logout = (req,res)=> 
    res.send("logout",{pageTitle: "logout"});
export const userDetail = (req,res)=> 
    res.send("userDetailt",{pageTitle: "userDetail"});
export const editProfile = (req,res)=> 
    res.send("editProfilet",{pageTitle: "editProfile"});
export const changePassword = (req,res)=> 
    res.send("changePassword",{pageTitle: "changePassword"});


