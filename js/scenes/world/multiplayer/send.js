export default function(connection, action, data) {
  connection.json({
    action: action,
    data: data
  });
}
