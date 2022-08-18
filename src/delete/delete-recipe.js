export async function deleteRecipe(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');
    headers.append('auth-token', localStorage.getItem('token'));

    const response = await fetch(`http://192.168.31.68:3105/ica/api/recipes/${id}`, {
        method: 'DELETE',
        headers,
    });
    const { data } = await response.json();
    return data;
}