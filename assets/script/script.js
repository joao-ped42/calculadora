const   btn = document.querySelectorAll('.botao')
const   ret = document.getElementById('numero_resultado')

btn.forEach
(
    function(b)
    {
        b.addEventListener('click', function()
        {
            if (!isNaN(Number(b.value)))
            {
                ret.innerText = b.value
            }
            if (b.value == 'C')
                ret.innerText = '0'
        })
    }
)