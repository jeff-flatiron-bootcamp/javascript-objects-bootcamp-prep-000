var playlist = {'Hellos': 'Goodbye', 'Planes': 'Flying High Again'};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName)
{
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.[artistName];
>>>>>>> e7d0453b177ff356442ae48fe2726b395a447bd0
  return playlist;
}