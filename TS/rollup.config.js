/*
 * @Author: your name
 * @Date: 2021-03-15 20:13:45
 * @LastEditTime: 2021-04-06 19:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\TS\rollup.config.js
 */
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import replace from "rollup-plugin-replace"
import commonjs from 'rollup-plugin-commonjs'
import { uglify }  from "rollup-plugin-uglify"
import babel from 'rollup-plugin-babel'
import multiEntry from "rollup-plugin-multi-entry"
import serve from 'rollup-plugin-serve' 
import livereload from 'rollup-plugin-livereload'
import pkg from './package.json'

const extensions = ['.js', '.ts']

export default [
	{
		input:  ['src/es/**.js', 'src/ts/**.ts', 'src/ts/**/**.ts'],
		output: {
			name: 'DSSdk',
			file: pkg.browser,
			format: 'umd'
		},
		sourceMap: 'inline', 
		plugins: [
			resolve({ module: true }), 
			multiEntry(),
			commonjs(),
			typescript(),
			babel({
				babelrc: false,
				exclude: 'node_modules/**',
				plugins: ['transform-class-properties'],
				presets: ["@babel/preset-env"],
				extensions,
				plugins: ["@babel/plugin-proposal-class-properties"]
			}),
			replace({
				exclude: 'node_modules/**',
				ENV: JSON.stringify(process.env.NODE_ENV)
			}),
			uglify(),
			serve({
			    contentBase: 'dist/', //启动文件夹;
				host: 'localhost',    //设置服务器;
				port: 8089           //端口号;
			}), 
			livereload({
				watch: 'dist/'     //监听文件夹;
			})
		]
	},
	{
		input: 'src/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
