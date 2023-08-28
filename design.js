// phần này ko đụng vào 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var options = {
    format: 'dd/mm/yyyy', // Định dạng ngày tháng năm
    autoClose: true // Tự động đóng datepicker sau khi chọn ngày
  };
  var instances = M.Datepicker.init(elems, options);
});

const checkboxes = document.querySelectorAll('.single-checkbox');
let gender ='';
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
      gender = this.value;
    }
  });
});


// khi ấn thì chuyển background color 
const list = document.getElementsByClassName('list');
const pressarray = [];
function press(event) {
  if (event.target.style.backgroundColor !== "rgb(199, 192, 192)") {
    event.target.style.backgroundColor = "rgb(199, 192, 192)";
  } else {
    event.target.style.backgroundColor = "#D9E3EE";
  }
}
// tạo mảng chứa tất cả thành phần 
const all=[];
for (let i=0;i<list.length;i++){
  all.push(list[i]);
}

// tạo mảng bỏ những thành phần đc chọn vào 
function array(event) {
  const index = pressarray.indexOf(event.target);
  if (index === -1) {
    pressarray.push(event.target);
  } else {
    pressarray.splice(index, 1);
  }
}
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', press);
  list[i].addEventListener('click', array);
}
// chuyển đổi nút bấm transaction  
 function pressbutton(event){
 
      event.target.style.backgroundColor = "#2c662e";
      event.target.style.color = "white";
 }
function upbutton(event){
      event.target.style.backgroundColor = "";
      event.target.style.color = "";
}

// button 1 
const firstbutton = document.getElementById('firstbutton');
const registration = document.getElementById('registration')

function comeback(id){
  id.style.backgroundColor="";
}
function deletepoint(){
if (pressarray.length!==0){
  for (let i=0;i<pressarray.length;i++){
    pressarray[i].remove();
    registration.appendChild(pressarray[i]);
    comeback(pressarray[i]);
  }
  pressarray.length=0;
}
}
firstbutton.addEventListener('mousedown',pressbutton);
firstbutton.addEventListener('mouseup',upbutton);
firstbutton.addEventListener('click',deletepoint);

// button 2 
const secondbutton = document.getElementById('secondbutton');
const subjectlist= document.getElementById('subjectlist');
function comeback(id){
  id.style.backgroundColor="";
}
function backback(){
if (pressarray.length!==0){
  for (let i=0;i<pressarray.length;i++){
    pressarray[i].remove();
    subjectlist.appendChild(pressarray[i]);
    comeback(pressarray[i]);
  }
  pressarray.length=0;
}
}
secondbutton.addEventListener('mousedown',pressbutton);
secondbutton.addEventListener('mouseup',upbutton);
secondbutton.addEventListener('click',backback);

//button 3
const thirdbutton = document.getElementById('thirdbutton');
function goall(){
  for (let i=0;i<all.length;i++){
    all[i].remove();
    registration.appendChild(all[i]);
  }
}
thirdbutton.addEventListener('mousedown',pressbutton);
thirdbutton.addEventListener('mouseup',upbutton);
thirdbutton.addEventListener('click',goall);

//button 4
const fouthbutton = document.getElementById('fouthbutton');
function goback(){
  for (let i=0;i<all.length;i++){
    all[i].remove();
    subjectlist.appendChild(all[i]);
  }
}
fouthbutton.addEventListener('mousedown',pressbutton);
fouthbutton.addEventListener('mouseup',upbutton);
fouthbutton.addEventListener('click',goback);

// submit button 
const table = document.getElementById('tablelist')
const submitlist= document.getElementById('submit-button');
const idcolumn = document.getElementById('id-col');
const namecolumn = document.getElementById ('fullname-col');
const date = document.getElementById ('dateofbirth-col');
const gendercol=document.getElementById('gender-col');
// giao diện 
function downsubmit(event){
  event.target.style.backgroundColor="#020f5388";
  event.target.style.color="white";
}
function upsubmit(event){
  event.target.style.backgroundColor="";
  event.target.style.color="";
}
// lấy thông tin 
function getinformation(){
  const studentid= document.getElementById ('studentid').value;
  const fullname = document.getElementById ('fullname').value;
  const dateinput = document.getElementById('dateofbirth'); 
  dateinput.addEventListener('change', function() {
    const dateofbirth  = this.value;
  });
  const gendergroup= document.getElementsByName('gender'); 
  for (let i=0;i<gendergroup.length;i++){
    gendergroup[i].addEventListener('change', function() {
      gender = this.value;
    });
  }
}
// show table 
function showtable(){
  if (studentid.value==="" || fullname.value==="" || dateofbirth.value==="" || gender===""){
      swal({
        title: "Warning",
        text: "Your information is incomplete. Please fill out!",
        icon: "warning",
        button: "OK",
      })
  }else {
  table.style.display="table";
  swal("Good job!", "You clicked the button!", "success");
    idcolumn.textContent = studentid.value;
    namecolumn.textContent = fullname.value;
    date.textContent = dateofbirth.value;
    gendercol.textContent = gender;
  }
}
submitlist.addEventListener('mousedown',downsubmit);
submitlist.addEventListener('mouseup',upsubmit);
submitlist.addEventListener('click',showtable);

// registered button
const open_confirm= document.getElementById('confirmtable');
const regist_button = document.getElementById('regist-button');
const closebutton =document.getElementById('closetab');

// chỗ gắn hàm chuyển css sau khi vào confirm
function returnstyle(event){
  event.target.style.backgroundColor="white";
  event.target.style.padding="0px";
}

// lấy thông tin từ registration list 
const listSubject=document.getElementById('listSubject');
const courseaccept=[];

function confirmtable(){
  const listChild=registration.querySelectorAll('li');
    for (let i=0;i<listChild.length;i++){
      courseaccept.push(listChild[i]);
    }
    
  if (studentid.value==="" || fullname.value==="" || dateofbirth.value==="" || gender==="" || courseaccept.length===0 || table.style.display!=="table"){
    swal({
      title: "Warning",
      text: "Your information is incomplete. Please fill out!",
      icon: "warning",
      button: "OK",
    })
  }else{
    open_confirm.classList.remove("hidden-infor");   
    document.getElementById('studentId').textContent=studentid.value;
    document.getElementById('fullName').textContent=fullname.value;
    document.getElementById('dateBirth').textContent=dateofbirth.value;
    document.getElementById('genderSex').textContent=gender;

    for (let i=0;i<courseaccept.length;i++){
      listSubject.appendChild(courseaccept[i]);
      
      // chỗ để thêm những gì cần sửa cho list trong confirm
      courseaccept[i].addEventListener('mouseenter',returnstyle);
      courseaccept[i].addEventListener('click',returnstyle);
    }
  }
}
// registered button
regist_button.addEventListener('mousedown',downsubmit);
regist_button.addEventListener('mouseup',upsubmit);
regist_button.addEventListener('click',confirmtable);

// nút close 
closebutton.addEventListener('mousedown',function(){
  closebutton.style.backgroundColor="#3b8a3d";
});
closebutton.addEventListener('mouseup',function(){
  closebutton.style.backgroundColor="";
});
function closetab(){
  open_confirm.classList.add("hidden-infor");
}
// nút close
closebutton.addEventListener('click',closetab);








