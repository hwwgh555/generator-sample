const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    console.log('this.appname', this.appname)
    return this.prompt([
      {
        type: 'input',
        name: 'title',
        message: '标题',
        default: this.appname //项目生成目录名称
      },
      {
        type: 'input',
        name: 'name',
        message: '创建人',
        default: this.appname,
      }
    ]).then(answers => {
      /*
        { name: 'user input value'}
      */
      this.answers = answers
    })
  }
  writing() {
    // this.fs.write(
    //   this.destinationPath('temp.text'),
    //   Math.random().toString()
    // )
    // const tpl = this.templatePath('foo.txt')
    // const output = this.destinationPath('foo.txt')
    // const context = {
    //   title: 'hello yeomon',
    //   success: true
    // }
    // this.fs.copyTpl(tpl, output, context)


    // const tpl = this.templatePath('index.html')
    // const output = this.destinationPath('index.html')
    // const context = {
    // name: 'hello html from sample cli',
    // title: 'html的标题'
    // }
    // this.fs.copyTpl(tpl, output, context)

    const templates = [
      'component/index.jsx',
      'component/constants.js',
      'component/index.less',
    ]

    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers,
      )
    })
  }
}

