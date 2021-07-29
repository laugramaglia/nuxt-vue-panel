<template>
  <div>
    <b-table sort-icon-left borderless striped hover :items="items" :fields="fields">
        <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(more)>
          <b-dropdown no-caret right variant="light" toggle-class="icon-button-edited">
                <template #button-content>
                  <b-icon icon="three-dots-vertical" variant="info"></b-icon>
                </template>
                <b-dropdown-item href="#">Edite</b-dropdown-item>
                <b-dropdown-item href="#">Delete</b-dropdown-item>
            </b-dropdown>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: 'name',
            label: 'Nombre',
            sortable: true
          },
          {
            key: 'user',
            label: 'Usuario',
            sortable: true
          },
          {
            key: 'age',
            label: 'Edad',
            sortable: false,
            class:"text-center"
          },
          {
              key:'more',
              label: '',
              sortable: false,
              class: 'text-right'
          }
        ],
        items: [
          { isActive: true, age: 40, user: 'Dickerson', name: 'Macdonald' },
          { isActive: false, age: 21, user: 'Larsen', name: 'Shaw' },
          { isActive: false, age: 89, user: 'Geneva', name: 'Wilson' },
          { isActive: true, age: 38, user: 'Jami', name: 'Carney' }
        ]
      }
    }
  }
</script>
<style lang="scss">
    .icon-button-edited{
        background-color: transparent;
        border: none;
        
    }
</style>