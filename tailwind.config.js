module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily:{
        'body': 'Roboto',
      },

      container: {
        center: true,
        padding: "15px",

        screens: {
          lg: "1377px",
        },
      },

      colors: {
        primary: {
          DEFAULT: "#003E7E",
        },
        blue:{
          DEFAULT: '#2AA3EF'
        },
        gray:{
          DEFAULT: '#C2C9D1',
          lighter: 'rgba(255,255,255,0.75)',
          dark: '#C0C0C0',
          darker: 'rgba(0,0,0,0.5)',
          lightest: 'rgba(255,255,255,0.9)',
          'lightest-1': 'rgba(255,255,255,0.95)'
        },

        black:{
          light: 'rgba(0,0,0,0.5)',
          lighter: 'rgba(0,0,0,0.25)'
        },
        accent:{
          DEFAULT: '#007C8F'
        },
        success:{
          DEFAULT: '#3CC13B',
          lightest: 'rgba(255,255,255,0.9)',
        },
        yellow:{
          DEFAULT: '#FFD700',
        },
        brown:{
          DEFAULT: '#CD7F32'
        }
      },

      maxWidth: {
        1440: "1440px",
        popup:'1073px'
      },
      width: {
        popup:'1073px',
      },
      height:{
        popup : '650px'
      },
      margin:{
        '-activeTab': '-1px'
      },
      boxShadow: {
        DEFAULT: '0px 10px 24px rgba(0, 0, 0, 0.12)',
        sm: '0px 0.5px 0px #C2C9D1',
        md: '0px 5px 24px rgba(0, 0, 0, 0.12)',
        xs: '0px 2px 4px rgba(0, 0, 0, 0.24)',
        lg: '5px 5px 10px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'odd', 'even'],
    },
  },
  plugins: [],

  purge: {
    mode : 'layers',
    content: ['public/**/*.html',],
  },
};
