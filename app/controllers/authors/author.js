import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        deletePost(id) {
            this.get('store').findRecord('blogPost', id, { reload: true }).then(function(pt) {
                pt.deleteRecord();
                pt.get('isDeleted');
                pt.save();
            });

        }
        
    }
});
