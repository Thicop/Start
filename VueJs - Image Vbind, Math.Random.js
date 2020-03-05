new Vue ({
    el: '#desafio',
    data:{
        nome: 'Ana Joana',
        idade: '28',
        imagem: 'https://abrilclaudia.files.wordpress.com/2019/09/sergio-mallandro.jpg?quality=85&strip=info&w=720'
    },
    methods: {
        idadeVez3(){
            return this.idade * 3
        },
        randomico(){
            return Math.random()
        },

    }
})
