/*
    Inicializa alguns componentes do Materialize
*/
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('select').material_select();
});

/**
    Utilidade
*/

//retorna o elemento pelo id
var $id = function (id) {
    return document.getElementById(id);
}

//retorna o primeiro elemento pelo seletor
var $query = function (selector) {
    return document.querySelector(selector);
}

//retorna mais de um elemento pelo seletor
var $all = function (selector) {
    return document.querySelectorAll(selector);
}

/**
    Funções construtoras
*/
var Professor = function (id, name, course) {
    this.id = id;
    //nome completo
    this.name = name;
    this.course = course;
    this.subjects = [];
    this.addSubject = function (subject) {
        this.subjects.push(subject);
    }
    this.findSubjectById = function (id) {
        for (i in this.subjects) {
            if (this.subjects[i].id == id) {
                return this.subjects[i];
            }
        }
    }
    this.getFirstName = function () {
        return this.name.split(' ')[0];
    }
    this.getLastName = function () {
        //OK!!!
        //TODO 5 - Retornar o sobrenome do professor manipulando a string this.name

        let fullName = this.name.split(' ');
        let lastName = '';
        for (let i = 1; i < fullName.length; i++) {
            lastName += fullName[i] + ' ';
        }

        return lastName;
    }
}

//FIXME 1 Metodo push
var Subject = function (id, name, professor, dayWeek, initHour) {
    this.id = id;
    this.name = name;
    this.professor = professor;
    this.dayWeek = dayWeek;
    this.initHour = initHour;
    this.students = [];
    this.addStudent = function (student) {

        this.students.push(student);
    }
}

var Student = function (ra, name) {
    this.ra = ra;
    this.name = name;
}

//VARIAVEIS PARA TESTE!!! APAGAR DEPOIS
let professor = new Professor(1, 'Roni Fábio', 'TSI');
let subject = new Subject(1, 'Web 2', professor, 1, '18:40');
let student = new Student('21111', "Matheus Rocha");
let student1 = new Student('654', "Alex Hilton");
let student2 = new Student('21111', "Carlos Bone");



window.onload = function () {
    /*
        Métodos úteis
    */
    function findProfessorById(id) {
        for (i in professors) {
            if (professors[i].id == id) {
                return professors[i];
            }
            //FIXME 2 subjects[1] para subjects[i]
        }
    }

    function findSubjectById(id) {
        for (i in subjects) {
            if (subjects[i].id == id) {
                return subjects[i];
            }
        }
    }

    function generateRA() {
        //TODO 1 - gerar um valor randômico entre 1 e 10000, sem casas decimais.
        return Math.floor(Math.random() * 10000);
    }

    /*
        Cadastro de Professor
    */

    //TODO 2 - Permitir a digitação de apenas letras e espaço no nome do professor
    $id('input-name').onkeypress = function (event) {
        var name = event.charCode;
        if (!((name >= 65 && name <= 122) || name === 32)) {
            event.preventDefault();
        }
    }

    //atribui foco ao primeiro input
    //TODO 3 - Atribuir foco ao input de nome de Professor ao carregar o script
    $id('input-name').focus();


    var professors = [];

    var professorId = 0;
    $id('span-professor').innerHTML = professorId;
    document.forms[0].onsubmit = function (e) {
        //evita que o formulário seja submetido e a página atualizada
        e.preventDefault();
        let name = $id('input-name').value;
        let course = $id('input-course').value;
        //FIXME 8 Mudei o professors para array e fiz o objeto professor inicializando com new
        if (name == '' || course == '') {
            return false;
        }

        let professor = new Professor(++professorId, name, course);
        professors.push(professor);

        let select = $id('select-professor');
        //FIXME 9
        let option = document.createElement('option');
        option.text = professor.name;
        option.value = professor.id;
        select.appendChild(option);
        //FIXME 3 $id('span-professor').value = professorId;
        //mostra a mensagem de sucesso
        $id('panel-message-professor').classList.remove('my-hide-message');
        $id('panel-message-professor').classList.add('my-show-message');

        //atualiza o select    
        $(select).material_select();

        //atualiza a quantidade de professores
        $id('span-professor').innerHTML = professorId;
    } //fim cadastro de professores

    /*
        Cadastro de Disciplinas
    */
    var subjects = [];
    var subjectId = 1;

    $id('input-hour-init').addEventListener('blur', function () {
        let hour = this.value;
        if (isNaN(hour)) {
            this.classList.add('invalid');
            $id('button-subject').disabled = true;
        } else if ((hour.length > 2) || (hour < 0 || hour > 24)) {
            this.classList.add('invalid');
            $id('button-subject').disabled = true;


        } else {
            this.classList.remove('invalid');
            $id('button-subject').disabled = false;
        }
    });

    //TODO 4 - transformar em maíusculo o nome da disciplina ao perder o foco
    $id('input-name-subject').addEventListener('blur', function () {
        this.value = this.value.toUpperCase();
    });


    document.forms[1].onsubmit = function (e) {
        //evita que o formulário seja submetido e a página atualizada
        e.preventDefault()

        let name = $id('input-name-subject').value;
        let professorIndex = $id('select-professor').selectedIndex;
        let weekDayIndex = $id('select-day-week').selectedIndex;
        let initHour = $id('input-hour-init').value;
        let weekDay = $id('select-day-week').options[weekDayIndex].text;
        let professorId = $id('select-professor').options[professorIndex].value;
        let professor = findProfessorById(professorId);

        //FIXME 4 preventDefault(e); 196

        let subject = new Subject(subjectId++, name, professor, weekDay, initHour);
        professor.addSubject(subject);
        subjects.push(subject);
        console.log(subjects);

        //cria os checkboxes
        var checkboxSubject = document.createElement('input');
        checkboxSubject.type = 'checkbox';
        checkboxSubject.id = subject.id;
        checkboxSubject.value = subject.name;
        checkboxSubject.name = "student-subject";

        //cria label
        var label = document.createElement('label')
        label.htmlFor = subject.id;
        label.appendChild(document.createTextNode(subject.name));

        //adiciona no p
        var p = document.createElement('p');
        p.appendChild(checkboxSubject);
        p.appendChild(label);
        $id('checkbox-group-subject').appendChild(p);

        //mostra a mensagem de sucesso
        $id('panel-message-subject').classList.remove('my-hide-message');
        $id('panel-message-subject').classList.add('my-show-message');

        console.log(subject);
    } //fim cadastro de disciplinas

    //FIXME 7 Inverti a declaracao da funcao inputRaFocus com a sua utilização

    /*
        Cadastro de Alunos
    */

    var inputRaFocusHandler = function () {
        this.value = generateRA();
    }

    $id('input-ra').onfocus = inputRaFocusHandler;


    var students = [];
    document.forms[2].onsubmit = function (e) {
        //evita que o formulário seja submetido e a página atualizada
        e.preventDefault();
        let ra = $id('input-ra').value;
        let name = $id('input-name-student').value;

        let student = new Student(ra, name);
        students.push(student);
        //FIXME 5
        //busca disciplinas correspondente ao id do checkbox marcado
        let checkboxes = document.getElementsByName('student-subject');

        for (i in checkboxes) {
            let checkbox = checkboxes[i];

            if (checkbox.checked) {
                let subject = findSubjectById(checkbox.id);
                subject.addStudent(student);
            }
        }

        //mostra a mensagem de sucesso
        $id('panel-message-student').classList.remove('my-hide-message');
        $id('panel-message-student').classList.add('my-show-message');
    } //fim cadastro de alunos

    /*
        Esconde todas as mensagens de sucesso ao clicar em limpar        
    */
    function clean() {
        //pega todos os elementos com tal classe
        let msgs = $all('.my-show-message');
        for (i in msgs) {
            if (msgs[i].classList) {
                //adiciona e remove classes no elemento
                msgs[i].classList.add('my-hide-message');
                msgs[i].classList.remove('my-show-message');
                //FIXME 6
            }
        }
    }

    //busca por todos botões reset
    let resets = $all('button[type=reset]');

    for (i in resets) {
        resets[i].onclick = function () {
            clean();
        };
    }

    //relatório
    let containerReport = $id('container-report')
    $id('button-report').onclick = function () {
        //reseta o container
        containerReport.innerHTML = '';

        for (i in professors) {
            let professor = professors[i];

            //cria o título da categoria professor
            let p = document.createElement('p')
            let title = document.createElement('h5')
            title.appendChild(document.createTextNode("Professor " + professor.id));

            //
            //cria o elemento para apresentar o nome do professor
            //
            let ul = document.createElement('ul');
            ul.className = 'collection';

            let li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(professor.getFirstName()));

            ul.appendChild(li);

            //adiciona do painel
            containerReport.appendChild(p);
            containerReport.appendChild(title);
            containerReport.appendChild(ul);

            let subjects = professor.subjects;
            for (i in subjects) {
                let subject = subjects[i];

                //cria o título da categoria disciplinas
                let p = document.createElement('p')
                title = document.createElement('h5')
                title.appendChild(document.createTextNode("Disciplina"));
                containerReport.appendChild(p);
                containerReport.appendChild(title);

                //elemento para agrupar as disciplinas
                ul = document.createElement('ul');
                ul.className = 'collection';

                //elemento para apresentar uma disciplina
                let li = document.createElement('li');
                li.className = 'collection-item';
                li.appendChild(document.createTextNode(subject.name));

                //adiciona a disciplina corrente no painel
                ul.appendChild(li);
                containerReport.appendChild(ul);

                //
                //mostra os alunos da disciplina
                //

                //cria o título da categoria disciplinas
                title = document.createElement('h5')
                title.appendChild(document.createTextNode("Alunos"));
                containerReport.appendChild(title);

                //elemento para agrupar os alunos da disciplina
                ul = document.createElement('ul');
                ul.className = 'collection';

                let students = subject.students;
                console.log(students);
                //ordena os alunos por nome

                //TODO 6 - Ordenar os alunos de forma crescente por nome
                students.sort();

                for (i in students) {
                    let student = students[i];

                    //elemento para apresentar um aluno
                    let li = document.createElement('li');
                    li.className = 'collection-item';
                    li.appendChild(document.createTextNode(student.name));

                    //adiciona o aluno corrente no painel
                    ul.appendChild(li);
                    containerReport.appendChild(ul);
                }
            }
        }
    }
} //fim window.onload
