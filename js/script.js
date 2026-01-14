(function(){
    'use strict';

    const select_year = document.getElementById('select_year');
    const select_month = document.getElementById('select_month');
    const select_day = document.getElementById('select_day');
    let i;

    function $set_year(){
        for(i = 1920; i <2026; i++){
            let op = document.createElement('option');
            op.value = i;
            op.text = i;
            select_year.appendChild(op);
        }
        function $set_month() {
            for(i = 1; i <12; i++){
                let op = document.createElement('option');
                op.value = i;
                op.text = i;
                select_month.appendChild(op);
            }
        }

        function $set_day() {
            let children = select_day.children
            while(children.length){
                children[0].remove()
            }
            if(select_year.value !=='' && select_month.value !==''){
                const last_day = new Date(select_year.value.select_month.value,0).getDate()

                for (i = 1; i<= last_day; i++) {
                    let op = document.createElement('option');
                    op,value = i;
                    op.text = i;
                    select_day.appendChild(op);
                }
            }
        }
        window.onload = function() {
            $set_year();
            $set_month();
            $set_day();
            select_year.addEventListener('change',$set_day)
            select_month.addEventListener('change',$set_day)
        }
    }
})();