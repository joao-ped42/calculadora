const	btn = document.querySelectorAll('.botao')
const	ret = document.getElementById('numero_resultado')
const	equal = document.getElementById('calcular')
const	before = document.getElementById('numero_anterior')
let		operation = ""

function	calcular()
{
	ret.innerText = math.evaluate(operation)
}

btn.forEach
(
	function(b)
	{
		b.addEventListener('click', function()
		{
			if (b.value == '+' || b.value == '-' || b.value == '/' || b.value == '*')
				before.innerText = operation
			if (b.value != 'DEL' && b.value != 'C' && b.value != 'CE' && b.value != '=')
			{
				if (ret.innerText == '0')
					ret.innerText = b.value
				else
					ret.innerText = ret.innerText + b.value
				operation = operation + b.value
			}
			if (b.value == 'DEL')
				operation = operation.slice(0, -1)
			if (b.value == 'C')
			{
				ret.innerText = '0'
				before.innerText = '0'
				operation = ""
				return ;
			}
			if (b.value == '=')
			{
				let	result = math.evaluate(operation)
				ret.innerText = result
				operation = math.evaluate(operation).toString()
			}
			console.log(operation)
		}
		)
	}
)