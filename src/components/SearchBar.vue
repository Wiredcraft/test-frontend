<template>
	<div>
		<input type="" name="" v-model="searchWord" @keyup.enter="searchTerms(searchWord)">
		<span class="searchIcon" @click="searchTerms(searchWord)"></span>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				searchWord:''
			}
		},
		methods:{
			searchTerms(searchWord){
				let term = searchWord.toLowerCase().trim();

				this.$store.dispatch('initStates')

				if(this.$store.getters.filterTerm == ''){

				}else{
					this.$store.dispatch('filterLevel',this.$store.getters.filterTerm)
				}

				this.$store.dispatch('filterTerms',term)
			}
		}
	}
</script>
<style scoped>
	div {
		float: right;
		position: relative;
	}
	input {
		width: 874px;
		padding: 10px;
		box-sizing: border-box;
	}
	.searchIcon {
		width: 20px;
	    height: 20px;
	    display: block;
	    position: absolute;
	    right: 15px;
	    top: 8px;
	    background-size: contain;
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAKVElEQVR4nO3dbbXiOhiG4UdCJUQCEiJhS6iELaEOtgQkIKESkIAEJHB+hJ5hZhjgTdOkSe5rrfw6HyulfZo3H7Al/MsgyUk6SBolfUv6kTTf2/neLpKu93a5t1nSSdLx3qZ7GyV93f+fQDUGhYd2CcFZ4YG/bdzO+hUgf+8HUNyg8EBOyheGT9usEFK/zaUDzy2h+FEog0oH4dN2UgiyS/x5AP+H4qR9jRJrwjIm/HzQKadf5VPph3qrdhRlGIy8Qg3fwmjxaTuLUQVveLU9WnzSLgqrcMD/vAjGs/az4jNFA7wIxidtjPt4UatBYXJa+sGrqTFH6cCgUDbsefL9eNykdF+etZPYS2mSV7ly6qzwYP0oTIC/7v053JtTCO+zIyLLWa4v/TrLNSmMgHOh67nd+4AG5B41rgoP7qR856K+FIKTeyPzLEaTqh0UHpocgfjWfk7XOoXRJteLgWXhCnlt+3AsoXB5LmeVL22/KDGLU8RVWEqqrUqKSfsZKWJ8a7sFgKvq/myaN2ibkmoZLVp6Q3ptN6p85bsMfOqg9G/GWe0f5NtqT4h5yY54pZ1vzOqvVDgofVA4qrID30oXjosoD1KPxHPe7uPRpDQ38ar25hhrjUoXFEJSwCTKqRxSrQgSkoy+lW7UwHujCEk1UoTjLEYNq4PSnGUjJBtKEY5ZzDXWSFFynbL3ugNrw0FJlY7X+pVD7kVCXutuyEUs36bmtL7k4p4k4LQ+HC5zn3sxaH1IfO5Ot2TQui8F8X2F7a0NCQccV1hz8JBw5LP2RXbJ3+X6rZmUE44y1oSElS0Dr/h5x1ks45a0JiRM2j+wpqa9ipFjD7h/G5oU/+HyBtqHQfEVwFygv9Xwiv9gx+y9xStelFpJrSmt+GLOPn2JUiuZSXEf5lFMyvfsqLj7yqrWA6e40uoiwlGDWXEhYQPxLvYtQ61ah0Fx3048l+js3njFjR7MO+oSOx/p/iUYM/xeRWlVo5h7fSnS052IfauMBfqK9Zy43yYxbxRWN+o2Ka5i6E7M6MH6eBtiJuxjiY6WFHOUfSrRUSTnxVzkJScm5r2LeUG6Eh0tYRKjR++c7M/AsURHc4vZNGL0aFPM2TtXoqM5jWL0QDDK/iw0/3NBs+yTM0aPdsVUE806iNEDvxtlfyZ8gX5mEfNDDK5ER5FNzJy02cm6dWmPXfM+WH/vt8kya5B99Oj+JGcnYp4NV6KjW7IeLWFpty/WMqu51SxredVsnYmnRnVeZlm/FOWL9BKldF1mWZd3L2W6icK6LbOsy7uUV30aZXtOmlnlPMp24WORXqI0a5nVzDzEOnS6Ir3EHliflepXOrt9KyCKddPQF+llQtYJejN1JaKM6myibp2gT0V6ib2wVhzVv1CtQybHS2DZM6u+JLfuoLsivcSezOpoom652EuhPmJfrFWHK9LLRC76/EL5sWJI9nmrL9LLRCwXOhfqI/bFevJ7LNLLBJxsF3os0kvsjXVroNqlXi/bhfInDSDZl3qnIr1MYFQnQyWSszw31e6FWCdb7IFgYVncqXbuag0If5MOC8uvLhIQdIeAPGkEBAtLQKrdPyMgiEVAnjRfpJfYIwLypPkivcQeEZAnzRfpJfaIgDxpvkgvsUcXERACgn+yfGlqLtTH1aynMqs9dIaknGzPzbFILxOwnsqcivQSe2N9bqo95NrdF/CRhFdHL9YuakkkNcoWkLFEJ1OxLNdV/wsVSKKrU+CzbBdb9S9UIImufgnH+gsVnMfCRbZnpmqTbBfrS3QSu2Fd2Kl2k3Bh3QuZivQSe+Fle16qX/nk191hYZ2gV7sH8shaUzJR75d1gj4W6WVi1on6WKSX2APry9QV6WVio2wXfSzSS5TW7R97ZR6CT0zqbIL+yPp30l2RXqIka3k1FunlRo6yXTxH3/tiLa+ae4lO6rS+xEcmdV6GW+chzb0h8JLlUOtNjex//MlaYx7LdBOZedlfnlWf4P2XUfZh1BXoJ/Kybg5e1ehmckyZxWS9bU72Fc4my6vFUZ1PxvCbSZRXvxnFB4JgkH30uKjR8moR86FUf+YfT02yvyynAv3MzlpmMYq0Z5B9VbObRZuYXdNLkZ5iK5Psz0BTZ6/esW4M3dTY2ZuOOdnL7Js6+zp2zCjCilYbrN8PuqnT30yzbhAxitTPy37Pu52Dxo4iTS/zNW4Wo4dJzCjS1WStIdZfuOly7vGnmFGk2yG3YjH7X7wM72JGkW7WxBsRc4+7Hz0WTnEfHm+XOlh/64r7+0TM0h+l1v55xZVWLMY8cVFcSPjB632KnXfcxNccnvKK+zCZj+xT7LyD0uqFo+I+VE787kvsfbyKiuClmFOeS5sL9Bd/mxR3/27q5Dj7Wl7xH3DTX8esQOyK1fKCY2L+odj6lQleOWvCwaqV0aC4I/EM1WWsDQfL9RGc4j90yq18vhW/nMvLbCWvdSGZs/e4L5PW3Z+TKK1WWzN8E5JtDIpfyn1szBcTWXszzmIzMZVB6xZR/mxj1t43bNa6G8FkcL2D4vepCMnG1mwiPrYpc79bMWrdZJyQZOCU5iadxeTwU6lLKkKysbV7JI8l15i369UZte2oQUg2kioky2jisvZ+/w7KN2oQko2kDMlNbCxK4TMdlX/UICQbmpXupvRadg0Km7IpXziEZEdShuSm8KCMOS+gkL0Gg5BsIPZ77a/aRW3eoBqCQUg2MGq7m/Sj+peGB4V9oFqCQUg24LTtA3BSXTfrcbTYw+SbkOzEFiVXLWFZQvGj+kNBSDZ0UL4H5KTwQH4pfym2BGJSWLDIdc1HlSnXxgSfGe5yHpV4bBeFB+hb4eF1Ca/noBDESWVKp7N+HfxMvR9FSAoZtc1JVGu7KrzlTwoBml60n/u/M2s/c4ij/h4hCUlD1n4Bq9f2OGo8Q0ga4pTmG3E9tKvCS+WTeRUhacxWXwBqoVmC8YiQNGhUnZtnWwXjR+sWFQhJo7z6Lb2uCgsDqZaoCUnDnPqZzM+KK6U+QUg68K30p4VLt6WMyvFL6oSkI6PqLcGW/RevMjv9hKQzy072ReUf/leBmBRGitInkQlJx5x+BeaoMiXZEogfhYeidCCeIST4jdPfwVkz4lwVHrDHYypedf1VJkKCjziFh9srhGh8aF8P/+ygfZRIKZUKic9wbUAShAR4g5AAbxAS4A1CArxBSIA3BpX51qTPcG1AEk6EBHjJiZAALzkREuAlJ0ICvORESICXnAgJ8JITIQFeciIkwEtOhAR4Keev9hMSVImQAG8QEuANQgK8QUiANwgJ8AYhAd4gJMAbB+UPCCFBVQgJ8AYhAd4oFZKafi8ZnSsRkjnLlQGJlAjJq78rD+xO7pBc81wWkE7ukHznuSwgnZwhOWW6JiAprzwBOWe6HiA5L+YhwEte24cEqJrXduG45LsMYDte2wTkmPEagE15pQ8Im4Voile6cLDEiyZ5pVm9cnm7DeTjtS4g7KCjeQeFVSjryEE40JVvfRaOWUzK0alB0qQw8V7+XPVVYYQ5KQRjePYf/geLPnUQOt5iugAAAABJRU5ErkJggg==");
	}
</style>