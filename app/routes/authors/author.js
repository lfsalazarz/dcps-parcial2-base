import Route from '@ember/routing/route';

export default Route.extend({
    model({id}){
        const authors = this.modelFor('authors');
        const author = authors.findBy('id', id);

        if(!author){
            this.transitionTo('authors');
        }
        else{
            return author;
        }

    }
});
