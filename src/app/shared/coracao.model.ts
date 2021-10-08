export class Coracao{
     constructor(
        public cheio : boolean,
        public coracaoVazio: string = '/assets/coracao_vazio.png',
        public coracaoCheio: string = '/assets/coracao_cheio.png'


    ){
       
    }

    public exibeCoracao(): string{
        if(this.cheio){
            return this.coracaoCheio
        } else {
            return this.coracaoVazio
        }
    }
}