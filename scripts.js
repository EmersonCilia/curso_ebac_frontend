$(document).ready(function() {



    function atualizaHeader() {
        if ($('#lista-tarefas li').length > 0) {
            $('h2').show();
        } else {
            $('h2').hide();
        }
    }

    $('form').on('submit', function(event) {
        event.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa) {
            const novoItem = $(`
                <li>
                    <span>${novaTarefa}</span>
                    <img src="./img/cancel.svg" class="cancel-icon" alt="Cancelar tarefa" />
                </li>
            `);
            $(novoItem).appendTo('#lista-tarefas');
            $('#nova-tarefa').val('');

            atualizaHeader();
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completada');
    });

    $('#limpa-todas').on('click', function() {
        $('#lista-tarefas').empty();

        atualizaHeader();
    });

    $('#limpa-completas').on('click', function() {
        $('.completada').remove();

        atualizaHeader();
    });

    $('#lista-tarefas').on('click', '.cancel-icon', function() {
        $(this).parent().remove();

        atualizaHeader();
    });
});
