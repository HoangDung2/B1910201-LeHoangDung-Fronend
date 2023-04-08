<script>
import ContactAddForm from '@/components/ContactAddForm.vue'
import ContactService from '@/services/contact.service'

export default {
    components: {
        ContactAddForm
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data)
                this.message = 'Liên hệ được cập nhật thành công'
            } catch(error) {
                console.log(error)
            }
        }
    },
    created() {
        this.message = ''
    }
}
</script>

<template>
    <h4>Thêm liên hệ liên hệ</h4>
    <ContactAddForm 
        :contact="{}"
        @submit:contact="addContact"
    />
    <p>{{ message }}</p>
</template>