const interpolacionLineal = () => {
    let x = document.getElementById("x").value;
    let fx0 = document.getElementById("fx0").value;
    let x0 = document.getElementById("x0").value;
    let fx1 = document.getElementById("fx1").value;
    let x1 = document.getElementById("x1").value;
  
    let fx =
      parseFloat(fx0) +
      ((parseFloat(fx1) - parseFloat(fx0)) / (parseFloat(x1) - parseFloat(x0))) *
        (parseFloat(x) - parseFloat(x0));
  

    document.getElementById("resultadoLineal").innerHTML = fx;
};

function interpolacionCuadratica() {
    let x = parseFloat(document.getElementById('x-c').value);
    let x0 = parseFloat(document.getElementById('x0-c').value);
    let x1 = parseFloat(document.getElementById('x1-c').value);
    let x2 =  parseFloat(document.getElementById('x2-c').value);
    let fx0 =  parseFloat(document.getElementById('fx0-c').value);
    let fx1=  parseFloat(document.getElementById('fx1-c').value);
    let fx2=  parseFloat(document.getElementById('fx2-c').value);
    
    let b0 = fx0;
    let b1 = ((fx1-fx0)/(x1-x0));
    let b2 = (((fx2-fx1)/(x2-x1))-((fx1-fx0)/(x1-x0)))/(x2-x0);
    let fx = Number((b0) + (b1*(x-x0)) + (b2*(x-x0)*(x-x1)));
    
    document.getElementById("resuldatoCuadratica").innerHTML = fx;
}
  