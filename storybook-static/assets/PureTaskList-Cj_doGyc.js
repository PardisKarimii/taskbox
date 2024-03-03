import{_,T as p}from"./Task-PVmKsH8t.js";import{r as f,b as c,d as r,F as l,e as k,f as h,o as t,g as s,j as T,k as d}from"./vue.esm-bundler-DIx4Hmil.js";const u={name:"PureTaskList",components:{Task:p},props:{tasks:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["archive-task","pin-task"],setup(a,{emit:i}){return a=f(a),{isEmpty:c(()=>a.tasks.length===0),tasksInOrder:c(()=>[...a.tasks.filter(e=>e.state==="TASK_PINNED"),...a.tasks.filter(e=>e.state!=="TASK_PINNED")]),onArchiveTask(e){i("archive-task",e)},onPinTask(e){i("pin-task",e)}}}},v={class:"list-items"},g=s("span",{class:"glow-checkbox"},null,-1),y=s("span",{class:"glow-text"},[s("span",null,"Loading"),d(),s("span",null,"cool"),d(),s("span",null,"state")],-1),P=[g,y],x={key:1,class:"list-items"},N=s("div",{class:"wrapper-message"},[s("span",{class:"icon-check"}),s("p",{class:"title-message"},"You have no tasks"),s("p",{class:"subtitle-message"},"Sit back and relax")],-1),A=[N];function b(a,i,e,n,L,B){const m=h("Task");return t(),r("div",v,[e.loading?(t(),r(l,{key:0},k(6,o=>s("div",{key:o,class:"loading-item"},P)),64)):n.isEmpty?(t(),r("div",x,A)):(t(!0),r(l,{key:2},k(n.tasksInOrder,o=>(t(),T(m,{key:o.id,task:o,onArchiveTask:n.onArchiveTask,onPinTask:n.onPinTask},null,8,["task","onArchiveTask","onPinTask"]))),128))])}const V=_(u,[["render",b]]);u.__docgenInfo={displayName:"PureTaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["R:/st-book-test/src/components/task/PureTaskList.vue"]};export{V as P};
