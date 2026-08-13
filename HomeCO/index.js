//---------------------------------------------------------search function--------------------------------------------------------------------------

        const Search = document.getElementById('Search');
        const Product = document.querySelectorAll('#Product li');


        Search.addEventListener('input', function() {
            const filterValue = Search.value.toLowerCase();


            Product.forEach(item => {
                const text = item.textContent.toLowerCase();
                
                if (text.includes(filterValue)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none'; 
                }
            });
        });

//--------------------------------------------------------------------------------------------------------------------------------------