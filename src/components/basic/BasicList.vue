<template>
  <div class="basic-list">
    basic list
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus">
.basic-list {
  padding: 15px;
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  table>thead>tr>th, table>tbody>tr>td, table>tbody>tr>th {
    border: 1px solid #ddd;
    padding: 4px;
  }
}
</style>