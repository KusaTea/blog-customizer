import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import styles from 'src/styles/index.module.scss';

export const App = () => {
	const [standardFontFamily, setStandardFontFamily] = useState<string>(
		defaultArticleState.fontFamilyOption.value
	);
	const [standardFontSize, setStandardFontSize] = useState<string>(
		defaultArticleState.fontSizeOption.value
	);
	const [standardFontColor, setStandardFontColor] = useState<string>(
		defaultArticleState.fontColor.value
	);
	const [standardContentWidth, setStandardContentWidth] = useState<string>(
		defaultArticleState.contentWidth.value
	);
	const [standarBackgroundColor, setStandarBackgroundColor] = useState<string>(
		defaultArticleState.backgroundColor.value
	);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': standardFontFamily,
					'--font-size': standardFontSize,
					'--font-color': standardFontColor,
					'--container-width': standardContentWidth,
					'--bg-color': standarBackgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				setStandardFontFamily={setStandardFontFamily}
				setStandardFontSize={setStandardFontSize}
				setStandardFontColor={setStandardFontColor}
				setStandardContentWidth={setStandardContentWidth}
				setStandarBackgroundColor={setStandarBackgroundColor}
			/>
			<Article />
		</main>
	);
};
