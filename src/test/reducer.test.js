import reducers from "@/Reducers"

test('reducers', () => {
  let state;
  state = reducers({lastCommit:{sha:'',error:'',loading:true},counter:{value:0},pointss:{value:0},user:{users:[],loading:true},authUser:{reqState:{success:false,statusCode:0,message:null,at:null},userState:{token:null,validated:false,expiresIn:null}},darkTheme:{darkThemeEnabled:true}}, {type:'lastCommit/getLastCommitSuccess',payload:{sha:'b214ed1c888a272a912ca2ca138d183e24c825be'}});
  expect(state).toEqual({lastCommit:{sha:'b214ed1c888a272a912ca2ca138d183e24c825be',error:'',loading:false},counter:{value:0},pointss:{value:0},user:{users:[],loading:true},authUser:{reqState:{success:false,statusCode:0,message:null,at:null},userState:{token:null,validated:false,expiresIn:null}},darkTheme:{darkThemeEnabled:true}});
});
