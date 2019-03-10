export default function apiFetch(endpoint, config) {
    return fetch(`http://localhost:8085${endpoint}`, {...config}).then(json=>json.json()).then(data=> data);
}
