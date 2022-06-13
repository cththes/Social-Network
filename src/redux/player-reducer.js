const PLAY_MUSIC = "player/PLAY_MUSIC";

let initialState = {
  isPlaying: false,
  url: 0,
  title: 0,
  music: [
    {
      title: "AL-90 - Black Sapphire",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/AL-90%20-%20Black%20Sapphire.mp3",
    },
    {
      title: "Andy Stott - Never the right time",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Andy%20Stott%20-%20Never%20the%20right%20time.mp3",
    },
    {
      title: "Autechre - Further",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Autechre%20-%20Further.mp3",
    },
    {
      title: "Balladur - Time Is A Killing Machine",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Balladur%20-%20Time%20Is%20A%20Killing%20Machine.mp3",
    },
    {
      title: "Blue October - All That We Are",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Blue%20October%20-%20All%20That%20We%20Are.mp3",
    },
    {
      title: "Bluestaeb - Just A Staeb Ahead (Feat. Anthony Drawn)",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bluestaeb%20-%20Just%20A%20Staeb%20Ahead%20(Feat.%20Anthony%20Drawn).mp3",
    },
    {
      title: "BLVCK CEILING - End of Time",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/BLVCK%20CEILING%20-%20END%20OF%20TIME.mp3",
    },
    {
      title: "Boards of Canada - An Eagle In Your Mind",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Boards%20of%20Canada%20-%20An%20Eagle%20In%20Your%20Mind.mp3",
    },
    {
      title: "Bowery Electric - Coming Down",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Bowery%20Electric%20-%20Coming%20Down.mp3",
    },
    {
      title: "Burial - Pirates",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Burial%20-%20Pirates.mp3",
    },
    {
      title: "Cremation Lily - Lovers Against the Rocks",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Cremation%20Lily%20-%20Lovers%20Against%20the%20Rocks.mp3",
    },
    {
      title: "CU - 2020",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/CU%20-%202020.mp3",
    },
    {
      title: "Doja Cat - 4 mordant",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Doja%20Cat%20-%204%20Morant.mp3",
    },
    {
      title: "Fraunhofer Diffraction - Bloodlust",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fraunhofer%20Diffraction%20-%20Bloodlust.mp3",
    },
    {
      title: "Fuel - Halos Of The Sun",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Fuel%20-%20Halos%20of%20the%20Sun.mp3",
    },
    {
      title: "Grimes - Flesh without Blood",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Grimes%20-%20Flesh%20without%20Blood.mp3",
    },
    {
      title: "Jamie xx - Far Nearer",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jamie%20xx%20-%20Far%20Nearer.mp3",
    },
    {
      title: "Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie)",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Jazzpospolita%20-%20Czerwona%20Flaga%20(Ale%20Ja%20Sie%20Kapie).mp3",
    },
    {
      title: "Lissy Trullie - Madeleine (Jewellers Remix)",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lissy%20Trullie%20-%20Madeleine%20(Jewellers%20Remix).mp3",
    },
    {
      title: "Lorn - PERFEKT DARK",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Lorn%20-%20PERFEKT%20DARK.mp3",
    },
    {
      title: "Nadja - Long Dark Twenties",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Nadja%20-%20Long%20Dark%20Twenties.mp3",
    },
    {
      title: "Natalie Merchant - San Andreas Fault",
      url: "https://github.com/cththes/Social-Network-Database/blob/master/Music/Natalie%20Merchant%20-%20San%20Andreas%20Fault.mp3",
    },
    {
      title: "P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC)",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/P%20E%20A%20C%20E%20A%20N%20D%20T%20R%20A%20N%20Q%20U%20I%20L%20I%20T%20Y%20-%20A%20Hat%20In%20Time%20(Seal%20The%20Deal%20DLC).mp3",
    },
    {
      title: "Pale Saints - Porpoise",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pale%20Saints%20-%20Porpoise.mp3",
    },
    {
      title: "Pastel Ghost - Pulse",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Pastel%20Ghost%20-%20Pulse.mp3",
    },
    {
      title: "Psychonaut 4 - How Much for the Hope",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Psychonaut%204%20-%20How%20Much%20for%20the%20Hope.mp3",
    },
    {
      title: "Radiohead - Hearing Damage",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Radiohead%20-%20Hearing%20Damage.mp3",
    },
    {
      title: "Sendelica - It's the Neu! Kosmiche Disko",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Sendelica%20-%20It's%20the%20Neu%20Kosmiche%20Disko.mp3",
    },
    {
      title: "Shlohmo - We Sat in the Car",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Shlohmo%20-%20We%20Sat%20in%20the%20Car.mp3",
    },
    {
      title: "Whirr - Sway",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Whirr%20-%20Sway.mp3",
    },
    {
      title: "Yves Tumor feat. James K - Licking An Orchid (feat. James K)",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/Yves%20Tumor%20feat.%20James%20K%20-%20Licking%20An%20Orchid%20(feat.%20James%20K).mp3",
    },
    {
      title: "Планета Плутон - Тишина",
      url: "https://raw.githubusercontent.com/cththes/Social-Network-Database/master/Music/%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0%20%D0%9F%D0%BB%D1%83%D1%82%D0%BE%D0%BD%20-%20%D0%A2%D0%B8%D1%88%D0%B8%D0%BD%D0%B0.mp3",
    },
  ],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      if (state.isPlaying && state.url !== action.url) state.isPlaying = false;
      return {
        ...state,
        url: action.url,
        title: action.title,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
};

export const playMusicActionCreator = (currentTrack) => ({
  type: PLAY_MUSIC,
  url: currentTrack.url,
  title: currentTrack.title,
});

export default playerReducer;
