$('#data-table').DataTable({
    serverSide: true,
    ajax: '',
    columns: [
        {
            data: 'id',
            name: 'id'
        },
        {
            data: 'nama',
            name: 'nama'
        },
        {
            data: 'program.nama',
            name: 'program.nama'
        },
        {
            data: 'id',
            render: (id) =>  {
                return /* html */`
                    <button class="btn btn-success">Edit</button>
                    <a href="/mahasiswa/destroy/${id}" class="btn btn-danger">Hapus</a>
                `;
            }
        },
    ]
});
