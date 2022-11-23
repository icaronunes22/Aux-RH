

     /*  <script type="text/javascript" src="js/jquery-1.2.6.pack.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput-1.1.4.pack.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
		$("#cpf").mask("999.999.999-99");
	});
</script>*/
const btn = document.querySelector("#salario");
btn.addEventListener("click", function(e) {
    e.preventDeFault();
    const salario = document.querySelector("salario")
    const value = quantidade.value
console.log(value);

});


/*let valor = salarioTotal;
let texto = valor.toLocaleString("pt-BR", 
     { style: "currency" , currency:"BRL"});

console.log(texto);*/